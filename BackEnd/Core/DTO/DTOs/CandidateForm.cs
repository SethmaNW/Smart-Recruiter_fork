using Microsoft.AspNetCore.Http;

namespace DTO.DTOs;
public class CandidateForm
{
    public string? Candidate { get; set; }
    public IFormFile? CvFile { get; set; }
}