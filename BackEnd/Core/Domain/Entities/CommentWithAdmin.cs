namespace Domain.Entities;

public class CommentWithAdmin
{
    public string Comment { get; set; } = string.Empty;
    public int RoleId { get; set; }
    public string Name { get; set; } = string.Empty;

}
