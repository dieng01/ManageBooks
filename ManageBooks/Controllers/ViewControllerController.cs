using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ManageBooks.Controllers
{
    public class ViewControllerController : Controller
    {
        // GET: ViewController
        public ActionResult Index()
        {
            return View();
        }
    }
}