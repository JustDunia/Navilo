using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.Diagnostics;

namespace Navilo.AppHost
{
    internal static class ResourceBuilderExtensions
    {
        internal static IResourceBuilder<T> WithScalar<T>(this IResourceBuilder<T> builder)
            where T : IResourceWithEndpoints
        {
            builder.WithOpenApiUi(
                "scalar",
                "Scalar API Docs",
                "scalar");
            return builder;
        }

        private static IResourceBuilder<T> WithOpenApiUi<T>(this IResourceBuilder<T> builder,
            string name,
            string displayName,
            string path)
            where T : IResourceWithEndpoints
        {
            builder.WithCommand(
                name,
                displayName,
                async _ =>
                {
                    try
                    {
                        var baseEndpointReference = builder.GetEndpoint("https");
                        var openApiUrl = $"{baseEndpointReference.Url}/{path}";
                        Process.Start(new ProcessStartInfo()
                        {
                            FileName = openApiUrl,
                            UseShellExecute = true
                        });

                        return new ExecuteCommandResult()
                        {
                            Success = true
                        };
                    }
                    catch (Exception ex)
                    {
                        return new ExecuteCommandResult()
                        {
                            Success = false,
                            ErrorMessage = ex.ToString()
                        };
                    }
                },
                commandOptions: new CommandOptions()
                {
                    UpdateState = context => context.ResourceSnapshot.HealthStatus == HealthStatus.Healthy
                        ? ResourceCommandState.Enabled
                        : ResourceCommandState.Disabled,
                    IconName = "documentGlobe"
                });

            return builder;
        }
    }
}
