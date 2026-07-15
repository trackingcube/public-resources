const RNDA_BASE_URL = "https://trackingcube.github.io/public-resources/docs/rnda/";

const RNDA_AGE_GROUPS = [
  ["01","Birth","01-birth"],
  ["02","1 Month","02-1-month"],
  ["03","2 Months","03-2-months"],
  ["04","3 Months","04-3-months"],
  ["05","4 Months","05-4-months"],
  ["06","5 Months","06-5-months"],
  ["07","6 Months","07-6-months"],
  ["08","7 Months","08-7-months"],
  ["09","8 Months","09-8-months"],
  ["10","9 Months","10-9-months"],
  ["11","10 Months","11-10-months"],
  ["12","11 Months","12-11-months"],
  ["13","12 Months","13-12-months"],
  ["14","13 Months","14-13-months"],
  ["15","14 Months","15-14-months"],
  ["16","15 Months","16-15-months"],
  ["17","16 & 17 Months","17-16-and-17-months"],
  ["18","18 & 19 Months","18-18-and-19-months"],
  ["19","20 to 23 Months","19-20-to-23-months"],
  ["20","24 Months","20-24-months"],
  ["21","25 to 29 Months","21-25-to-29-months"],
  ["22","30 to 35 Months","22-30-to-35-months"],
  ["23","36 to 41 Months","23-36-to-41-months"],
  ["24","42 to 47 Months","24-42-to-47-months"],
  ["25","48 to 60 Months","25-48-to-60-months"],
  ["26","5 Years","26-5-years"],
  ["27","6 Years","27-6-years"],
  ["28","7 Years","28-7-years"],
  ["29","8 Years","29-8-years"],
  ["30","9 Years","30-9-years"],
  ["31","10 to 12 Years","31-10-to-12-years"],
  ["32","13 to 16 Years","32-13-to-16-years"]
].map(([n, label, slug]) => ({
  n, label,
  manual: `rnda-age-specific-pdfs/rnda-age-specific-manual-${slug}.pdf`,
  score: `rnda-age-specific-scoring-forms/rnda-age-specific-score-form-${slug}.pdf`
}));

// approximate month ranges [min,max] per group, used only to match a DOB to its age group
const RNDA_AGE_RANGES_MONTHS = [
  [0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],
  [12,12],[13,13],[14,14],[15,15],[16,17],[18,19],[20,23],[24,24],[25,29],[30,35],
  [36,41],[42,47],[48,60],[61,72],[73,84],[85,96],[97,108],[109,120],[121,144],[145,999]
];
RNDA_AGE_GROUPS.forEach((g,i)=>{ g.minM = RNDA_AGE_RANGES_MONTHS[i][0]; g.maxM = RNDA_AGE_RANGES_MONTHS[i][1]; });

const RNDA_UPDATES = {
  presentation: "rnda-manual-updates-presentation.pdf",
  video: "rnda-manual-updates-video-july-2026.mp4"
};
