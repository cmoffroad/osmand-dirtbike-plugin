# OsmAnd Dirtbike Plugin

This OsmAnd plugin includes a lightweight map style that highlights road and trail conditions for off-road motorcycles.

<img src="./src/res/dirtbike-image.png" height="300"/>

### Key Features

- **Color-coded Roads and Paths**: Easily distinguish roads and paths based on their physical or access conditions.
- **Consistent Road Representation**: Roads and pathways are displayed as straight lines (no dashes), with widths based on their classification.
- **Obstacles Marked**: Dead-ends are indicated by black dots, and barriers by red dots.

## Setup

### OsmAnd Installation

1. Install the [OsmAnd](https://play.google.com/store/apps/details?id=net.osmand) application on your device.
2. Open the application and tap on "Get started".
3. Download the Recommended Country dataset (if not already installed).

### First-time Plugin Installation

1. From your mobile browser, download the plugin [here](https://github.com/cmoffroad/osmand-dirtbike-plugin/raw/master/dist/osmand-dirtbike-plugin.osf).
2. Once the download is complete, click on "Open".
3. OsmAnd will automatically open and confirm the successful addition of the plugin.
4. Wait a few seconds for Suggested maps to appear (standard, contour lines).
5. Download the suggested datasets for your country (if not already installed).
6. Select "OK".
7. Tap the current profile icon on the top left corner.
8. Scroll down to "Map Style" and select "Dirtbike".

> **Note**: If you encounter a "Permission Denied" error on your Android phone:
> 1. Open your phone's Settings application.
> 2. Go to Apps > OsmAnd > Permissions.
> 3. Enable Storage and try reinstalling the plugin.

### Updating the Plugin

1. From your mobile browser, download the latest plugin version [here](./dist/osmand-dirtbike-plugin.osf).
2. Once the download is complete, click on "Open".
3. OsmAnd will automatically open and confirm the successful update of the plugin.
4. Close and re-open the application to ensure the renderer is updated.

### OsmAnd Subscriptions

In the free version of OsmAnd:
- Elevation data (Contour lines and Terrain) is not shown.
- OSM country datasets are updated once a month.

For enhanced outdoor exploration, consider a one-time or yearly subscription to enable:
- Elevation data.
- Hourly OSM dataset updates.

> **Note**: I am not affiliated with OsmAnd and do not receive any revenue from this plugin. After extensive research and experimentation, OsmAnd proved to be the best platform for creating my own maps.

> The OsmAnd Live feature is extremely useful for preparing maps before a trip. For example, you can add missing tracks via satellite imagery to OpenStreetMap. Your changes will appear in the OsmAnd application within an hour.

## Documentation

### Classifications

|Style|Category|OpenStreetMap Tags|
|---|---|---|
|![](https://www.gifpng.com/100x15/888888/?border-width=1&border-type=rectangle&border-color=FFFFFF&font-size=0)|Major roads|`highway=motorway, motorway_link, trunk, trunk_link, primary, primary_link, secondary, secondary_link`
|![](https://www.gifpng.com/100x12/888888/?border-width=1&border-type=rectangle&border-color=FFFFFF&font-size=0)|Medium roads|`highway=tertiary, tertiary_link, unclassified`|
|![](https://www.gifpng.com/100x8/888888/?border-width=1&border-type=rectangle&border-color=FFFFFF&font-size=0)|Minor roads|`highway=track, residential, service`|
|![](https://www.gifpng.com/100x8/f44336/?border-width=1&border-type=rectangle&border-color=FFFFFF&font-size=0)|Other roads|`highway=construction, living_street, busway, pedestrian, escape, raceway`|
|![](https://www.gifpng.com/100x4/888888/?border-width=1&border-type=rectangle&border-color=FFFFFF&font-size=0)|Pathways|`highway=path`|
|![](https://www.gifpng.com/100x4/f44336/?border-width=1&border-type=rectangle&border-color=FFFFFF&font-size=0)|Footways|`highway=footway,cycleway,bridleway,steps`|

<!-- ### Road and trail conditions

|Default Style|Detailed Style|Category|OpenStreetMap Tags|
|---|---|---|---|
|![](https://www.gifpng.com/100x8/2196f3/?border-width=0&font-size=0)|![](https://www.gifpng.com/100x8/03a9f4/?border-width=0&font-size=0)|Excellent paved road|`smoothness=excellent OR surface=asphalt`|
|![](https://www.gifpng.com/100x8/2196f3/?border-width=0&font-size=0)|![](https://www.gifpng.com/100x8/1769aa/?border-width=0&font-size=0)|Other paved road|`smoothness=good OR tracktype=grade1 OR surface=paved, concrete, concrete:plates, concrete:lanes, paving_stones, sett, unhewn_cobblestone, metal`|
|![](https://www.gifpng.com/100x8/4caf50/?border-width=0&font-size=0)|![](https://www.gifpng.com/100x8/8bc34a/?border-width=0&font-size=0)|Good unpaved road or trail|`dirtbike:scale=0 OR smoothness=good, intermediate, bad`|
|![](https://www.gifpng.com/100x8/4caf50/?border-width=0&font-size=0)|![](https://www.gifpng.com/100x8/357a38/?border-width=0&font-size=0)|High clearance track or trail|`dirtbike:scale=1 OR smoothness=very_bad`|
|![](https://www.gifpng.com/100x8/ffa726/?border-width=0&font-size=0)|![](https://www.gifpng.com/100x8/ffab40/?border-width=0&font-size=0)|Horrible track or trail|`dirtbike:scale=2 OR smoothness=horrible`| -->

## Questions and Support

For questions, bug reports, or improvement requests, please contact me via:
- https://www.openstreetmap.org/message/new/julcnx
