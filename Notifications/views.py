from django.shortcuts import render

# Create your views here.
def index(request):
    context = {'abc': 'data'}
    return render(request, 'Notifications/notification.html', context)