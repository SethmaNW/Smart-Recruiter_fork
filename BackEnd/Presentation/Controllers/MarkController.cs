using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;

namespace Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]

public class MarkController : ControllerBase{
    private readonly IMarkService _MarkService;

    public MarkController(IMarkService markService)
    {
        _MarkService = markService;
    }

    [HttpPost]
    public async Task<IActionResult> SaveMark(Mark mark)
    {
        var res = await _MarkService.SaveMark(mark);
        return Ok(res);
    }
    
    [HttpGet("getMarks/{candidateId}/{jobId}/{roleId}")]
    public async Task<IActionResult> GetMarks(int candidateId, int jobId, int roleId)
    {
        var marks = await _MarkService.GetMarks(candidateId, jobId, roleId);
        return Ok(marks);
    }
}