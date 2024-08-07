namespace BackEnd.Entities;

public class Candidate
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
    public float? GPA { get; set; }
    public int? Experience { get; set; }
    public int? Role_Id { get; set; }

}