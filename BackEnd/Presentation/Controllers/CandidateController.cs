using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;
using Microsoft.Extensions.Logging;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using DTO.DTOs;
using Newtonsoft.Json;

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

    [HttpPost]
    public async Task<IActionResult> Save([FromForm] CandidateForm candidateForm)
    {
        CandidateDTO? candidateDTO = candidateForm.Candidate != null ? JsonConvert.DeserializeObject<CandidateDTO>(candidateForm.Candidate) : null;
        if (candidateForm.CvFile == null || candidateForm.CvFile.Length == 0)
        {
            return BadRequest("CV file is required.");
        }

        var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }

        var fileName = $"{Guid.NewGuid()}_{candidateForm.CvFile.FileName}";
        var filePath = Path.Combine(uploadsFolder, fileName);

        // Save the file to the server
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await candidateForm.CvFile.CopyToAsync(stream);
        }

        var candidate = new Candidate
        {
            Name = candidateDTO?.Name,
            Contact = candidateDTO?.Contact,
            Email = candidateDTO?.Email,
            CV_FilePath = filePath,
            CV_FileName = fileName,
            Skills = candidateDTO?.Skills,
            Available_Date = candidateDTO?.Available_Date,
            GitHub_Link = candidateDTO?.GitHub_Link,
            LinkedIn = candidateDTO?.LinkedIn,
            Degree = candidateDTO?.Degree,
            University = candidateDTO?.University,
            Reason = candidateDTO?.Reason,
            Experience = candidateDTO?.Experience,
            
            Role_Id = 0
        };

        //Save the candidate to the database
        var savedCandidate = await _CandidateService.Save(candidate);

        return Ok(savedCandidate);
    }

}