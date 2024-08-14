using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;
using Microsoft.Extensions.Logging;

namespace Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly IAdminService _AdminService;

    public AdminController(IAdminService adminService)
    {
        _AdminService = adminService;
    }

    [HttpGet("email/{email}")]
    public async Task<IActionResult> GetAdminEmail(string email)
    {
        var ademail = await _AdminService.GetAdminEmail(email);
        return Ok(ademail);
    }
}