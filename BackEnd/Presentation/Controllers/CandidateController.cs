using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;

namespace Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CandidateController : ControllerBase
{
    private readonly ICandidateService _CandidateService;
    public CandidateController(
        // Constructor Injections
        ICandidateService candidateService
    ){
        _CandidateService = candidateService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var candidates = await _CandidateService.GetAll();
        return Ok(candidates);
    }

}