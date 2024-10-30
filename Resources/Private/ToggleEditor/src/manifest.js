import manifest from "@neos-project/neos-ui-extensibility";
import Editor from "./Editor";

manifest('NeosRulez.Neos.Editors.ToggleEditor', {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set("NeosRulez/Neos/Editors/ToggleEditor", {
        component: Editor,
    });
});
