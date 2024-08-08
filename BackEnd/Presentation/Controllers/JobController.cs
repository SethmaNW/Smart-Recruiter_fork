using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;

namespace Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobController(
    // Constructor Injections
    IJobService jobService
    ) : ControllerBase{
    private readonly IJobService _JobService = jobService;

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var jobs = await _JobService.GetAll();
        // Return HTTP status code 200 (OK) with the list of jobs
        return Ok(jobs);
    }
}