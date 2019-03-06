# Archivesspace UTC modifications
Customization files for UTC Library SPC Archivesspace.

## Files to modify
### config/config.rb
- AppConfig[:db_url] = "jdbc:mysql://localhost:3306/archivesspace?user=[readacted]&password=[readacted]&useUnicode=true&characterEncoding=UTF-8"
- AppConfig[:public_theme] = "local"
- AppConfig[:pui_enable_staff_link] = true
- AppConfig[:pui_hide][:digital_objects] = true
- AppConfig[:pui_hide][:accessions] = true
- AppConfig[:pui_hide][:classifications] = true
### modified files*ß:
```
plugins
└── local
    ├── frontend
    │   ├── assets
    │   │   ├── custom.css *
    │   │   ├── images
    │   │   │   └── utc.svg *
    │   │   ├── utc.ico *
    │   │   └── utc.js *
    │   └── views
    │       ├── layout_head.html.erb *
    │       ├── shared
    │       └── site
    │           ├── _branding.html.erb *
    │           └── _footer.html.erb *
    └── public
        ├── assets
            │   ├── custom.css *
            │   ├── images
            │   │   └── utc.svg *
            │   ├── utc.ico *
            │   └── utc.js *
            └── views
                ├── layout_head.html.erb *
                ├── shared
                    ├── _footer.html.erb *
                    └── _header.html.erb *
```
