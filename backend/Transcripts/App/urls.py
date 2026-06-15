from django.urls import path
from . import views
from django.conf import settings
from .views import ReviewListCreateView
from .views import (
    delivery_requests,
    send_courier_email,
)

urlpatterns = [
    # path('upload/', upload_image),
    path('register/', views.register_user),
    path('verify/', views.login_user),
    path("create-order/", views.create_order),
    path("verifys/", views.verify_payment),
    path("contact/", views.contact_api),
    path("add_college/", views.add_college),
    path("allcolleges/", views.get_all_colleges),
    path("submit/", views.submit_application),
    path("applications/", views.get_applications),
    path('application/<int:id>/status/', views.get_app_status),
    path("application-status/", views.get_application_status),
    path("send-notification/", views.send_notification),
    path('update-status/', views.update_status),
    path('application/<int:id>/update-status/', views.update_status),
    path("add_certificate/", views.add_certificate),
    path("colleges/<int:pk>/certificates/", views.get_college_certificates),
    path("certificates/<int:id>/", views.certificate_detail),  # PUT & DELETE
    path('download/<int:id>/', views.download_document),
    path("colleges/", views.get_colleges),
    path("verifications/", views.get_verified_applications, name="get_verifications"),
    path("refund/", views.refund_payment),
    path("forgot-password/", views.forgot_password, name="forgot_password"),
    path("verify-reset-token/", views.verify_reset_token, name="verify_reset_token"),
    path("reset-password/", views.reset_password, name="reset_password"),
    path('reviews/', ReviewListCreateView.as_view(), name='reviews'),
      path(
        "delivery-requests/",
        delivery_requests,
        name="delivery_requests"
    ),

    path(
        "send-courier-email/",
        send_courier_email,
        name="send_courier_email"
    ),
    
    




    
    
    
]
