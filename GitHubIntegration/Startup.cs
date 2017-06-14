using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GitHubIntegration.Startup))]
namespace GitHubIntegration
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
