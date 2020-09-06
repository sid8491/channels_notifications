from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'Notifications/notification.html')

def assign_jobs(request):
    return render(request, 'Notifications/assign_jobs.html')