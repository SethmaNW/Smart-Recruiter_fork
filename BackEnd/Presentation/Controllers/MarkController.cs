using Domain.Entities;
using DTO.DTOs;
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
    
}