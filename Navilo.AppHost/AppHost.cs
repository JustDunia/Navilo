using Navilo.AppHost;

var builder = DistributedApplication.CreateBuilder(args);

//var cache = builder.AddRedis("cache");

var postgres = builder.AddPostgres("postgres")
    .WithPgAdmin();
var naviloDb = postgres.AddDatabase("naviloDb");

var apiService = builder.AddProject<Projects.Navilo_ApiService>("apiservice")
    .WithHttpHealthCheck("/health")
    .WithScalar()
    .WithReference(naviloDb)
    .WaitFor(naviloDb);

builder.AddViteApp(name: "navilo-web", workingDirectory: "../navilo-web")
    .WithReference(apiService)
    .WaitFor(apiService)
    .WithNpmPackageInstallation();

builder.Build().Run();
