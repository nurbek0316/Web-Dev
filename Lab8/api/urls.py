from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:id>', views.category_detail),
    path('categories/<int:id>/product/', views.category_products)
]
