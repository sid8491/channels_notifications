from channels.generic.websocket import AsyncWebsocketConsumer


class NotificationConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.group_name = 'notifications'
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )


    async def receive(self, text_data):
        # print(f'Data received: {text_data}')
        await self.channel_layer.group_send(
            self.group_name,
            {
                'type': 'notifications',
                'value': text_data
            }
        )

    async def notifications(self, event):
        print(event['value'])
        await self.send(event['value'])