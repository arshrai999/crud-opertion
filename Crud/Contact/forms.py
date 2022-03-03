from django.forms import ModelForm
from Contact.models import Contact1
class ContactForm(ModelForm):
    class Meta:
        model = Contact1
        fields = ['Email','Password','Address','Address2','State','Zip','City']
