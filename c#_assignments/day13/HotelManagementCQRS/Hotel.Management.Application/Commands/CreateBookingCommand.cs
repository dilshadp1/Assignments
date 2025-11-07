using MediatR;
using Hotel.Management.Application.DTOs;
using Hotel.Management.Domain.Interfaces;
using Hotel.Management.Domain.Entities;

namespace Hotel.Management.Application.Commands
{
    public class CreateBookingCommand : IRequest<BookingResponseDTO>
    {
        public int CustomerId { get; set; }
        public int RoomId { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
    }
    public class CreateBookingCommandHandler : IRequestHandler<CreateBookingCommand, BookingResponseDTO>
    {
        private readonly IBookingRepository _bookingRepository;

        public CreateBookingCommandHandler(IBookingRepository BookingRepository)
        {
            _bookingRepository = BookingRepository;
        }

        public async Task<BookingResponseDTO> Handle(CreateBookingCommand request, CancellationToken cancellationToken)
        {
            var booking = new Booking
            {
                CheckInDate = request.CheckInDate,
                CheckOutDate = request.CheckOutDate,
                CustomerId = request.CustomerId,
                RoomId = request.RoomId,
                Status = BookingStatus.Pending
            };

            var result = await _bookingRepository.AddBookingAsync(booking);

            return new BookingResponseDTO
            {
                Id = result.Id,
                CustomerName = customer?.FullName ?? "Customer Not Found",
                RoomNumber = room?.RoomNumber ?? "Room Not Found",
                Status = result.Status

            };
        }
    }
}