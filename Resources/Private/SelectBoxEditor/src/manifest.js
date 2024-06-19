import manifest from "@neos-project/neos-ui-extensibility";
import Editor from "./Editor";

manifest('NeosRulez.Neos.Editors.SelectBoxEditor', {}, (globalRegistry) => {
	const editorsRegistry = globalRegistry.get('inspector').get('editors');
	editorsRegistry.set("NeosRulez/Neos/Editors/SelectBoxEditor", {
		component: Editor,
	});
});
