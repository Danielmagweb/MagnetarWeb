$dir = "C:\Users\st-11\OneDrive\Gmaps\magnetarweb"
cd $dir

mkdir -Force .lovable, public, src, "src/assets", "src/components", "src/components/site", "src/components/ui", "src/hooks", "src/lib", "src/routes"

if (Test-Path gitignore) { Rename-Item gitignore .gitignore }
if (Test-Path prettierignore) { Rename-Item prettierignore .prettierignore }
if (Test-Path prettierrc) { Rename-Item prettierrc .prettierrc }

Move-Item lovable-error-reporting.ts .lovable/ -ErrorAction SilentlyContinue
Move-Item favicon.ico public/ -ErrorAction SilentlyContinue

Move-Item __root.tsx, index.tsx "src/routes/" -ErrorAction SilentlyContinue
Move-Item error-capture.ts, error-page.ts, utils.ts, contact.functions.ts, example.functions.ts "src/lib/" -ErrorAction SilentlyContinue
Move-Item use-mobile.tsx "src/hooks/" -ErrorAction SilentlyContinue

$uiFiles = "accordion.tsx,alert-dialog.tsx,alert.tsx,aspect-ratio.tsx,avatar.tsx,badge.tsx,breadcrumb.tsx,button.tsx,calendar.tsx,card.tsx,carousel.tsx,chart.tsx,checkbox.tsx,collapsible.tsx,command.tsx,context-menu.tsx,dialog.tsx,drawer.tsx,dropdown-menu.tsx,form.tsx,hover-card.tsx,input-otp.tsx,input.tsx,label.tsx,menubar.tsx,navigation-menu.tsx,pagination.tsx,popover.tsx,progress.tsx,radio-group.tsx,resizable.tsx,scroll-area.tsx,select.tsx,separator.tsx,sheet.tsx,sidebar.tsx,skeleton.tsx,slider.tsx,sonner.tsx,switch.tsx,table.tsx,tabs.tsx,textarea.tsx,toggle-group.tsx,toggle.tsx,tooltip.tsx" -split ","
foreach ($file in $uiFiles) { Move-Item $file "src/components/ui/" -ErrorAction SilentlyContinue }

$siteFiles = "CarePlans.tsx,Contact.tsx,FAQ.tsx,Features.tsx,Footer.tsx,Hero.tsx,HeroVisual.tsx,Logo.tsx,Navbar.tsx,Pricing.tsx,Process.tsx,Reveal.tsx,Testimonials.tsx" -split ","
foreach ($file in $siteFiles) { Move-Item $file "src/components/site/" -ErrorAction SilentlyContinue }

Move-Item router.tsx, routeTree.gen.ts, server.ts, start.ts, styles.css, config.server.ts "src/" -ErrorAction SilentlyContinue

Write-Host "Done!"
