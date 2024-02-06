"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_splunkSpl"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/splunk-spl.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/splunk-spl.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = splunkSpl;\nsplunkSpl.displayName = \"splunkSpl\";\nsplunkSpl.aliases = [];\nfunction splunkSpl(Prism) {\n    Prism.languages[\"splunk-spl\"] = {\n        comment: /`comment\\(\"(?:\\\\.|[^\\\\\"])*\"\\)`/,\n        string: {\n            pattern: /\"(?:\\\\.|[^\\\\\"])*\"/,\n            greedy: true\n        },\n        // https://docs.splunk.com/Documentation/Splunk/7.3.0/SearchReference/ListOfSearchCommands\n        keyword: /\\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\\b/i,\n        \"operator-word\": {\n            pattern: /\\b(?:and|as|by|not|or|xor)\\b/i,\n            alias: \"operator\"\n        },\n        function: /\\b\\w+(?=\\s*\\()/,\n        property: /\\b\\w+(?=\\s*=(?!=))/,\n        date: {\n            // MM/DD/YYYY(:HH:MM:SS)?\n            pattern: /\\b\\d{1,2}\\/\\d{1,2}\\/\\d{1,4}(?:(?::\\d{1,2}){3})?\\b/,\n            alias: \"number\"\n        },\n        number: /\\b\\d+(?:\\.\\d+)?\\b/,\n        boolean: /\\b(?:f|false|t|true)\\b/i,\n        operator: /[<>=]=?|[-+*/%|]/,\n        punctuation: /[()[\\],]/\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zcGx1bmstc3BsLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFDakJBLFVBQVVDLFdBQVcsR0FBRztBQUN4QkQsVUFBVUUsT0FBTyxHQUFHLEVBQUU7QUFDdEIsU0FBU0YsVUFBVUcsS0FBSztJQUN0QkEsTUFBTUMsU0FBUyxDQUFDLGFBQWEsR0FBRztRQUM5QkMsU0FBUztRQUNUQyxRQUFRO1lBQ05DLFNBQVM7WUFDVEMsUUFBUTtRQUNWO1FBQ0EsMEZBQTBGO1FBQzFGQyxTQUNFO1FBQ0YsaUJBQWlCO1lBQ2ZGLFNBQVM7WUFDVEcsT0FBTztRQUNUO1FBQ0FDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxNQUFNO1lBQ0oseUJBQXlCO1lBQ3pCTixTQUFTO1lBQ1RHLE9BQU87UUFDVDtRQUNBSSxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc3BsdW5rLXNwbC5qcz8zY2NlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbHVua1NwbFxuc3BsdW5rU3BsLmRpc3BsYXlOYW1lID0gJ3NwbHVua1NwbCdcbnNwbHVua1NwbC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHNwbHVua1NwbChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXNbJ3NwbHVuay1zcGwnXSA9IHtcbiAgICBjb21tZW50OiAvYGNvbW1lbnRcXChcIig/OlxcXFwufFteXFxcXFwiXSkqXCJcXClgLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyBodHRwczovL2RvY3Muc3BsdW5rLmNvbS9Eb2N1bWVudGF0aW9uL1NwbHVuay83LjMuMC9TZWFyY2hSZWZlcmVuY2UvTGlzdE9mU2VhcmNoQ29tbWFuZHNcbiAgICBrZXl3b3JkOlxuICAgICAgL1xcYig/OmFic3RyYWN0fGFjY3VtfGFkZGNvbHRvdGFsc3xhZGRpbmZvfGFkZHRvdGFsc3xhbmFseXplZmllbGRzfGFub21hbGllc3xhbm9tYWxvdXN2YWx1ZXxhbm9tYWx5ZGV0ZWN0aW9ufGFwcGVuZHxhcHBlbmRjb2xzfGFwcGVuZGNzdnxhcHBlbmRsb29rdXB8YXBwZW5kcGlwZXxhcnVsZXN8YXNzb2NpYXRlfGF1ZGl0fGF1dG9yZWdyZXNzfGJpbnxidWNrZXR8YnVja2V0ZGlyfGNoYXJ0fGNsdXN0ZXJ8Y29maWx0ZXJ8Y29sbGVjdHxjb25jdXJyZW5jeXxjb250aW5nZW5jeXxjb252ZXJ0fGNvcnJlbGF0ZXxkYXRhbW9kZWx8ZGJpbnNwZWN0fGRlZHVwfGRlbGV0ZXxkZWx0YXxkaWZmfGVyZXh8ZXZhbHxldmVudGNvdW50fGV2ZW50c3RhdHN8ZXh0cmFjdHxmaWVsZGZvcm1hdHxmaWVsZHN8ZmllbGRzdW1tYXJ5fGZpbGxkb3dufGZpbGxudWxsfGZpbmR0eXBlc3xmb2xkZXJpemV8Zm9yZWFjaHxmb3JtYXR8ZnJvbXxnYXVnZXxnZW50aW1lc3xnZW9tfGdlb21maWx0ZXJ8Z2Vvc3RhdHN8aGVhZHxoaWdobGlnaHR8aGlzdG9yeXxpY29uaWZ5fGlucHV0fGlucHV0Y3N2fGlucHV0bG9va3VwfGlwbG9jYXRpb258am9pbnxrbWVhbnN8a3Z8a3Zmb3JtfGxvYWRqb2J8bG9jYWxpemV8bG9jYWxvcHxsb29rdXB8bWFrZWNvbnRpbnVvdXN8bWFrZW12fG1ha2VyZXN1bHRzfG1hcHxtY29sbGVjdHxtZXRhZGF0YXxtZXRhc2VhcmNofG1ldmVudGNvbGxlY3R8bXN0YXRzfG11bHRpa3Z8bXVsdGlzZWFyY2h8bXZjb21iaW5lfG12ZXhwYW5kfG5vbXZ8b3V0bGllcnxvdXRwdXRjc3Z8b3V0cHV0bG9va3VwfG91dHB1dHRleHR8b3ZlcmxhcHxwaXZvdHxwcmVkaWN0fHJhbmdlbWFwfHJhcmV8cmVnZXh8cmVsZXZhbmN5fHJlbHRpbWV8cmVuYW1lfHJlcGxhY2V8cmVzdHxyZXR1cm58cmV2ZXJzZXxyZXh8cnRvcmRlcnxydW58c2F2ZWRzZWFyY2h8c2NyaXB0fHNjcnVifHNlYXJjaHxzZWFyY2h0eG58c2VsZmpvaW58c2VuZGVtYWlsfHNldHxzZXRmaWVsZHN8c2ljaGFydHxzaXJhcmV8c2lzdGF0c3xzaXRpbWVjaGFydHxzaXRvcHxzb3J0fHNwYXRofHN0YXRzfHN0cmNhdHxzdHJlYW1zdGF0c3x0YWJsZXx0YWdzfHRhaWx8dGltZWNoYXJ0fHRpbWV3cmFwfHRvcHx0cmFuc2FjdGlvbnx0cmFuc3Bvc2V8dHJlbmRsaW5lfHRzY29sbGVjdHx0c3RhdHN8dHlwZWFoZWFkfHR5cGVsZWFybmVyfHR5cGVyfHVuaW9ufHVuaXF8dW50YWJsZXx3aGVyZXx4MTF8eG1sa3Z8eG1sdW5lc2NhcGV8eHBhdGh8eHlzZXJpZXMpXFxiL2ksXG4gICAgJ29wZXJhdG9yLXdvcmQnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiKD86YW5kfGFzfGJ5fG5vdHxvcnx4b3IpXFxiL2ksXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAgZnVuY3Rpb246IC9cXGJcXHcrKD89XFxzKlxcKCkvLFxuICAgIHByb3BlcnR5OiAvXFxiXFx3Kyg/PVxccyo9KD8hPSkpLyxcbiAgICBkYXRlOiB7XG4gICAgICAvLyBNTS9ERC9ZWVlZKDpISDpNTTpTUyk/XG4gICAgICBwYXR0ZXJuOiAvXFxiXFxkezEsMn1cXC9cXGR7MSwyfVxcL1xcZHsxLDR9KD86KD86OlxcZHsxLDJ9KXszfSk/XFxiLyxcbiAgICAgIGFsaWFzOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgbnVtYmVyOiAvXFxiXFxkKyg/OlxcLlxcZCspP1xcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OmZ8ZmFsc2V8dHx0cnVlKVxcYi9pLFxuICAgIG9wZXJhdG9yOiAvWzw+PV09P3xbLSsqLyV8XS8sXG4gICAgcHVuY3R1YXRpb246IC9bKClbXFxdLF0vXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic3BsdW5rU3BsIiwiZGlzcGxheU5hbWUiLCJhbGlhc2VzIiwiUHJpc20iLCJsYW5ndWFnZXMiLCJjb21tZW50Iiwic3RyaW5nIiwicGF0dGVybiIsImdyZWVkeSIsImtleXdvcmQiLCJhbGlhcyIsImZ1bmN0aW9uIiwicHJvcGVydHkiLCJkYXRlIiwibnVtYmVyIiwiYm9vbGVhbiIsIm9wZXJhdG9yIiwicHVuY3R1YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/splunk-spl.js\n"));

/***/ })

}]);