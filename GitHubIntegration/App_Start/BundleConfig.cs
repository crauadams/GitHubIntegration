using System.Web.Optimization;

namespace GitHubIntegration
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/angular")
                      .Include("~/app/js/angular.min.js")
                      .Include("~/app/js/angular-route.min.js")
                      .Include("~/app/js/app.js")
                      .Include("~/app/config/routeConfig.js")
                      .Include("~/app/controllers/appCtrl.js")
                      .Include("~/app/controllers/detailCtrl.js")
                      .Include("~/app/services/githubService.js")
                      .Include("~/app/services/sharedProperties.js")
                      .Include("~/app/services/config/config.js"));

            bundles.Add(new StyleBundle("~/app/css").Include(
                      "~/app/css/layout.css"));
        }
    }
}
