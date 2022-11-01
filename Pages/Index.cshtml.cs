using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyWebApp.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;
    public String Color { get; set; }

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
        Color = "light red";
    }

    public void OnGet()
    {

    }
}
