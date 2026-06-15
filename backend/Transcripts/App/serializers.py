from rest_framework import serializers
from .models import ImageUpload
from .models import Users,Admin
from .models import Review
from .models import DeliveryRequest

class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = ['id', 'image', 'uploaded_at']




from rest_framework import serializers
from .models import Users

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['name', 'email', 'password']

from rest_framework import serializers
from .models import College,Certificate

class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = "__all__"

from rest_framework import serializers
from .models import Application, Degree, Document

class DegreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = "__all__"


class DocumentSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['id', 'name', 'url']

    def get_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.file.url)


class ApplicationSerializer(serializers.ModelSerializer):
    degrees = DegreeSerializer(many=True, required=False)
    documents = DocumentSerializer(many=True, required=False)

    class Meta:
        model = Application
        fields = "__all__"

    def create(self, validated_data):
        degrees_data = validated_data.pop("degrees", [])
        documents_data = validated_data.pop("documents", [])

        app = Application.objects.create(**validated_data)

        for d in degrees_data:
            Degree.objects.create(application=app, **d)

        for doc in documents_data:
            Document.objects.create(application=app, **doc)

        return app
    
class CertificateSerializer(serializers.ModelSerializer):
        class Meta:
            model = Certificate
            fields = ['id', 'name', 'price', 'college']


from rest_framework import serializers
from .models import Payment, PasswordResetToken

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"

class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

class VerifyTokenSerializer(serializers.Serializer):
    token = serializers.CharField(required=True)

class ResetPasswordSerializer(serializers.Serializer):
    token = serializers.CharField(required=True)
    password = serializers.CharField(required=True, min_length=6)
    confirm_password = serializers.CharField(required=True, min_length=6)

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        return data

class PasswordResetTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = PasswordResetToken
        fields = ['token', 'created_at', 'expires_at', 'is_used']




class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'






class DeliveryRequestSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source="tracking_id")

    courierPartner = serializers.CharField(
        source="courier_partner"
    )

    currentLocation = serializers.CharField(
        source="current_location"
    )

    estDelivery = serializers.DateField(
        source="est_delivery"
    )

    class Meta:
        model = DeliveryRequest
        fields = [
            "id",
            "student",
            "email",
            "phone",
            "item",
            "courierPartner",
            "currentLocation",
            "status",
            "estDelivery",
        ]