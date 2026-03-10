

## Docker & Kubernetes Learnings

While working on this project we explored containerization and orchestration concepts:

- **Docker**
  - Built a container image with `Dockerfile` for the React application.
  - Used `docker build`, `docker run`, and `docker push` to create, run, and publish the image.
  - Learned about port mapping (`-p`) and resolving port conflicts.
  - Understood how the Docker daemon must be running to pull or push images.

- **Kubernetes**
  - Created a simple manifest (`service.yaml`) to describe a service for the app.
  - Deployed the container image into a cluster and exposed it through a service.
  - Gained familiarity with `kubectl` commands for applying manifests and inspecting resources.
  - Experienced how Kubernetes handles networking, scalability, and rolling updates.

These exercises reinforced the value of containers for consistent environments and Kubernetes for managing them at scale.
