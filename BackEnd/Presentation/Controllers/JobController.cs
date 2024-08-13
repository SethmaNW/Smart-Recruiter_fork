using Domain.Entities;
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

    [HttpPost]
    public async Task<IActionResult> Save(Job job)
    {
        Job status = await _JobService.Save(job);
        // Return HTTP status code 200 (OK) with the result of the save operation
        return Ok(status);
    }

    [HttpPut]
    public async Task<IActionResult> Update(Job job)
    {
        bool status = await _JobService.Update(job);
        // Return HTTP status code 200 (OK) with the result of the update operation
        return Ok(status);
    }

    [HttpGet("position/{jobId}")]
    public async Task<IActionResult> GetJobPosition(int jobId)
    {
        var jobPosition = await _JobService.GetJobPosition(jobId);
        return Ok(jobPosition);
    }
}