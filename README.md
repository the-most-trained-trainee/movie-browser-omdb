# Next.js Luna Edge Test Task

The most complicated issue was to implement redux-toolkit into the new app-routing system. There was no clear and precise guide in the Next 13 docs and Internet. The only working way was to make a "Providers wrapper", but its using destroys SSR meaning that the browser receives only "script-trash" without a valid HTML markup.

The four-day deadline has expired, but no working solution has been found. At least it was quite crashing challenge. Hope that the next "next" time will be better.
