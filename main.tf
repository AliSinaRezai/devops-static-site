terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

provider "local" {}

resource "local_file" "deployment_info" {
  filename = "deployment.txt"
  content  = "Static website infrastructure simulation completed using Terraform."
}