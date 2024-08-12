namespace Domain.Entities
{
    public class Interview
    {
        public int Id { get; set; }
        public DateTime? InterviewDateTime { get; set; }
        public int? CandidateId { get; set; }
        public int JobId { get; set; }
        public int? Duration { get; set; } = 30;   // Default 30 minutes

        // Navigation Properties
        public Candidate? Candidate { get; set; } 
        public Job? Job { get; set; }
    }
}
