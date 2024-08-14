using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;
using Microsoft.Extensions.Logging;

namespace Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CommentController : ControllerBase
{
    private readonly ICommentService _CommentService;

    public CommentController(ICommentService commentService)
    {
        _CommentService = commentService;
    }


    [HttpPut("{jobId}/{candidateId}/{adminId}")]
    public async Task<IActionResult> UpdateApplicantComment(int jobId, int candidateId, int adminId, string commentText)
    {
        var comment = await _CommentService.UpdateApplicantComment(jobId, candidateId, adminId, commentText);
        return Ok(comment);
    }

    [HttpGet("checkcomment/{jobId}/{candidateId}")]
    public async Task<IActionResult> CheckApplicantComment(int jobId, int candidateId)
    {
        var checkcomment = await _CommentService.CheckApplicantComment(jobId, candidateId);
        return Ok(checkcomment);
    }
}