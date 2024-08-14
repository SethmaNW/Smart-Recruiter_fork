using Microsoft.AspNetCore.Mvc;
using ServiceInterfaces.IServices;
using Microsoft.Extensions.Logging;
using DTO.DTOs;

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


    [HttpPost("{jobId}/{candidateId}/{adminId}")]
    public async Task<IActionResult> UpdateApplicantComment(int jobId, int candidateId, int adminId, [FromBody] CommentRequest commentRequest)
    {
        //var comment = await _CommentService.UpdateApplicantComment(jobId, candidateId, adminId, commentText);
        //return Ok(comment);
        if (commentRequest == null || string.IsNullOrEmpty(commentRequest.CommentText))
        {
            return BadRequest("Comment text is required.");
        }

        var comment = await _CommentService.UpdateApplicantComment(jobId, candidateId, adminId, commentRequest.CommentText);
        if (comment)
        {
            return Ok();
        }

        return StatusCode(500, "An error occurred while updating the comment.");
    }

    [HttpGet("checkcomment/{jobId}/{candidateId}")]
    public async Task<IActionResult> CheckApplicantComment(int jobId, int candidateId)
    {
        var checkcomment = await _CommentService.CheckApplicantComment(jobId, candidateId);
        return Ok(checkcomment);
    }
}