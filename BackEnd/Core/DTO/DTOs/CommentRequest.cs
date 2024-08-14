namespace DTO.DTOs;

using System.ComponentModel.DataAnnotations;

public class CommentRequest
{
    [Required]
    public string? CommentText { get; set; }
}