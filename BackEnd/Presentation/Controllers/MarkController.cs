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
    public async Task<IActionResult> SaveMark(MarkSaveDTO markSaveDTO)
    {
        string res = await _MarkService.SaveMark(markSaveDTO);
        return Ok(res);
    }
    
}