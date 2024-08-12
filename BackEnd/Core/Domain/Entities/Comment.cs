namespace Domain.Entities;

public class Comment
{
    public int Id { get; set; }
    public string? Comment { get; set; }
    public int? AdminId { get; set; }
    public int? CandidateId { get; set; }
    public int? JobId { get; set; }
}
