namespace Domain.Entities;
public class CandidateWithComment
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Contact { get; set; }
    public string? Email { get; set; }
    public string? CV_FilePath { get; set; }
    public string? CV_FileName { get; set; }
    public string? Skills { get; set; }
    public DateTime? Available_Date { get; set; }
    public string? GitHub_Link { get; set; }
    public string? LinkedIn { get; set; }
    public string? Degree { get; set; }
    public string? University { get; set; }
    public string? Reason { get; set; }
    public string? Experience { get; set; }
    public int? Role_Id { get; set; }
    public string? Comment { get; set; }
    public bool commentEditable { get; set; } = true;
}