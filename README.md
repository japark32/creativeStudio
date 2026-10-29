# webDesign

## Page assets

The four landing-page cards keep page-specific assets beside their source page under `pages/`: `elemental/` contains the periodic-table CSS and controller, `dream/` contains the Spirit reader CSS and controller, and `wonder/` and `create/` contain their local style tokens. `shared/` contains the framed-page base stylesheet and keyboard/mobile navigation used across pages. Wonder and Create are static content pages, so they use the shared navigation script rather than duplicate page-specific JavaScript. Chemistry bond lessons retain their shared lesson scripts in `pages/`.
