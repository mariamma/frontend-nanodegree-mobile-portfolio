## Website Performance Optimization portfolio project


### To run the project

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

Copy the public URL ngrok gives you and try running it through PageSpeed Insights! 


### Optimizations done
1. Reducing size of images
1. Moving redundant code out of the loop
1. Optimize recalculate styles
1. Avoiding layout thrashing