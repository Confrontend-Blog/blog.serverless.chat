- [Chat Collection](https://mermaid.live/edit#pako:eNqVVMtu2zAQ_BVie8hFCSRRL7NFCtdO0R56Sk6tcmCkTSyUEg2SQuMa_veubNmWndpJdBD2MTPL1UBcQqFLBAFPRs5n7G76MW8YPdYtFLJiJp2daKWwcJVu2GOllPjgj5ObL1Ov0Eobynz_mPK9DHpoPB4lN_wEtMb6AY3toeNgEn4NTkCVtO4HWiufcHIw4Cyr3jDsbftQ7JY45J_dpecTevL2rRw-u3ec0VU0xcl6_g6OxaZE8ybC5n3k468c1pUc7tnl5fXWs75METX2xG5Gh-rtItQ2uv8v7qVXRBkUxeC7nhh02rb19E17xz1r80Bw7-NeZXiGl3Z35IGfROsywS6-oVLaYzP9h0mDbKHbzxev6RwZ3YltS4J92sXXr-gcmE8im1yw1qLZbgMe7WdqWZX0Zy87NRo2wxpzEBSW0vzOIW9WhJOt07eLpgDhTIsetPNSOpxWki6EGsSjVJaqc9n81PogB7GEZxABj6-iOPDTNEv4KE1iDxYgMv8q5WES8YxHUcSDcOXB37VA1-DJKEuzmPuxH_Jw9Q9uEXEx)

graph TD;
style chatsCollection fill:#0A6EBD,color:#000
style chatId1 fill:#5A96E3,color:#000
style members fill:#A1C2F1,color:#000
style lastMessageChatId1 fill:#A1C2F1,color:#000
style messagesSubcollectionChatId1 fill:#0A6EBD,color:#000
style messageId1ChatId1 fill:#5A96E3,color:#000
style textChatId1 fill:#A1C2F1,color:#000
style timestampChatId1 fill:#A1C2F1,color:#000
style senderChatId1 fill:#A1C2F1,color:#000

    chatsCollection["chats"] --> chatId1["chatId1"]
    chatId1 --> members["members[]"]
    chatId1 --> lastMessageChatId1["lastMessage: messageId1"]
    chatId1 --> messagesSubcollectionChatId1["messages"]
    messagesSubcollectionChatId1 --> messageId1ChatId1["messageId1"]
    messageId1ChatId1 --> textChatId1["text: 'Hello, how are you?'"]
    messageId1ChatId1 --> timestampChatId1["timestamp: <timestamp>"]
    messageId1ChatId1 --> senderChatId1["sender: userId1"]

- [chat_members](https://mermaid.live/edit#pako:eNqNkVtLwzAUgP9KOb52I5feFkGo64Q9-KS-aERim7li0ow0BWfZfzfdKo7hLQ8h5-T7TnI4PZSmksDgxYrNOrgtznkT-NW6rZJBuRbuWupnadu5UUqWrjZNsKqVYmcoTxaXRVgaZayPEDoWu1baZYULU3ZaNm5U4nyWLOgPyvCWV-68iUc-x3Nyhf_mye_8Yf-2lwcOR3kOj8FkcnH6ew-NGQ8cip32N1jHDYx1l9XTvx3y5ZC9AyFoabWoKz-efqjBwa2llhyYP1bCvnLgzc5zonPmZtuUwJztZAjdphJOFrXwU9XAVkK1PrsRzb0x-hPyIbAe3oBhGk-jGKM0zRI6S5M4hC2wDE1TSpKIZjSKIorJLoT3vT9c0GSWpVlMUYwIJbsPbpO29w)

graph TD;
style chatMembersCollection fill:#0A6EBD,color:#000
style userId1Document fill:#5A96E3,color:#000
style chatId1User1 fill:#A1C2F1,color:#000
style chatId1User2 fill:#A1C2F1,color:#000
chatMembersCollection["chatMembers"] --> userId1Document["userId1"]
userId1Document --> chatId1User1["chatId_1"]
userId1Document --> chatId1User2["chatId_2"]
