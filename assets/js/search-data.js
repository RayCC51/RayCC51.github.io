// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-let-39-s-start-blog",
      
        title: "Let&#39;s start blog!",
      
      description: "First blog post",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/start-blog/";
        
      },
    },{id: "post-sample-blog-post",
      
        title: "Sample blog post",
      
      description: "Test blog post tools",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/test/";
        
      },
    },{id: "projects-web-calculator",
          title: 'Web Calculator',
          description: "work in process...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/test_project/";
            },},{id: "projects-web-calculator",
          title: 'Web Calculator',
          description: "work in process...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/web-calculator/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RayCC51", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
