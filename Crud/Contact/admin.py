from django.contrib import admin
from Contact.models import Contact1
# Register your models here.
class ContactAdmin(admin.ModelAdmin):
    list_display = ['Email','State','City']
admin.site.register(Contact1,ContactAdmin)