FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

COPY ./ ./
RUN dotnet restore "./cms/cms.csproj"
RUN dotnet publish "./cms/cms.csproj" -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
RUN ls -la
EXPOSE 80
ENV ASPNETCORE_URLS http://+:80
ENTRYPOINT ["dotnet", "cms.dll"]