using ReactChatDemo.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
namespace ReactChatDemo.Services
{

    public class ChatService : IChatService
    {
        private List<ChatMessage> _allMessages = new List<ChatMessage>() {new ChatMessage{Date=DateTime.Now, Id="aa", Message="Test", Sender="Sender1"}};

        public async Task<ChatMessage> CreateNewMessage(string senderName, string message)
        {
            var chatMessage = new ChatMessage(Guid.NewGuid())
            {
                Sender = senderName,
                Message = message
            };
            _allMessages.Add(chatMessage);

            return chatMessage;
        }

        public async Task<IEnumerable<ChatMessage>> GetAllInitially()
        {
            return _allMessages;
        }
    }
}