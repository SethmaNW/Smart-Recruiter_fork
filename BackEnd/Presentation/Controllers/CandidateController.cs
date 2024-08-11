using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;
using Microsoft.Extensions.Logging;

namespace Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CandidateController : ControllerBase
{
    private readonly ICandidateService _CandidateService;
    //private readonly ILogger<CandidateController> _logger;

    public CandidateController(
        // Constructor Injections
        ICandidateService candidateService
        //ILogger<CandidateController> logger
    )
    {
        _CandidateService = candidateService;
        //_logger = logger;
    }

    [HttpGet("applicants/{jobId}")]
    public async Task<IActionResult> GetApplicantsFromJobId(int jobId)
    {
        //_logger.LogInformation("Processing request for jobId {JobId}", jobId);
        var applicants = await _CandidateService.GetApplicantsFromJobId(jobId);
        return Ok(applicants);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var candidates = await _CandidateService.GetAll();
        return Ok(candidates);
    }

}