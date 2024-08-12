using Microsoft.AspNetCore.Http;
using DTO.DTOs;
namespace DTO.DTOs;
public class CandidateForm
{
    public string? Candidate { get; set; }
    public IFormFile? CvFile { get; set; }
}