# Useful editors for Neos CMS

A Neos CMS plugin which provides other useful editors.

## Installation

Just run:

```
composer require neosrulez/neos-editors
```

## Distance Editor

![DistanceEditor](https://raw.githubusercontent.com/patriceckhart/NeosRulez.Neos.Editors/master/DistanceEditor.png)

### Usage

```yaml
'Neos.Neos:Content':
  ui:
    inspector:
      groups:
        distance:
          label: Distance
          icon: fas fa-arrows-alt-v
  properties:
    margin:
      type: array
      ui:
        label: Margin
        reloadIfChanged: true
        inspector:
          group: distance
          position: 1
          editor: NeosRulez/Neos/Editors/DistanceEditor
    padding:
      type: array
      ui:
        label: Padding
        reloadIfChanged: true
        inspector:
          group: distance
          position: 2
          editor: NeosRulez/Neos/Editors/DistanceEditor
```

### Several more editors are coming soon ...

## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com 
