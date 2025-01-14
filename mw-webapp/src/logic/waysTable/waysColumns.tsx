import {createColumnHelper} from "@tanstack/react-table";
import {Link} from "src/component/link/Link";
import {PositionTooltip} from "src/component/tooltip/PositionTooltip";
import {Tooltip} from "src/component/tooltip/Tooltip";
import {VerticalContainer} from "src/component/verticalContainer/VerticalContainer";
import {getWayStatus} from "src/logic/waysTable/wayStatus";
import {WayPreview} from "src/model/businessModelPreview/WayPreview";
import {pages} from "src/router/pages";
import {LanguageService} from "src/service/LangauageService";
import {DateUtils} from "src/utils/DateUtils";
import {Language} from "src/utils/LanguageWorker";
import {renderMarkdown} from "src/utils/markdown/renderMarkdown";
import {Symbols} from "src/utils/Symbols";
import styles from "src/logic/waysTable/columns.module.scss";

export const columnHelper = createColumnHelper<WayPreview>();

/**
 * Get first name from username
 */
export const getFirstName = (userName: string) => {
  return userName.split(" ")[0];
};

/**
 * Table columns
 * Don't get rid of any https://github.com/TanStack/table/issues/4382
 */
export const getWaysColumns = (language: Language) => [
  columnHelper.accessor("createdAt", {

    /**
     * Header
     */
    header: () => (<>
      <Tooltip
        position={PositionTooltip.TOP}
        content={LanguageService.allWays.waysTable.columnTooltip.createdAt[language]}
      >
        {LanguageService.allWays.waysTable.columns.createdAt[language]}
      </Tooltip>
    </>),

    /**
     * Cell with date of created way
     */
    cell: ({row}) => (
      <span className={styles.dateCell}>
        {DateUtils.getShortISODateValue(row.original.createdAt)}
      </span>
    ),
  }),
  columnHelper.accessor("lastUpdate", {

    /**
     * Header
     */
    header: () => (<>
      <Tooltip
        position={PositionTooltip.TOP}
        content={LanguageService.allWays.waysTable.columnTooltip.lastUpdate[language]}
        className={styles.tooltipFixed}
      >
        {LanguageService.allWays.waysTable.columns.lastUpdate[language]}
      </Tooltip>
    </>),

    /**
     * Cell with date of last updated way
     */
    cell: ({row}) => (
      <span className={styles.dateCell}>
        {DateUtils.getShortISODateValue(row.original.lastUpdate)}
      </span>
    ),
  }),
  columnHelper.accessor("status", {

    /**
     * Header
     */
    header: () => (
      <Tooltip
        position={PositionTooltip.TOP}
        content={LanguageService.allWays.waysTable.columnTooltip.status[language]}
      >
        {LanguageService.allWays.waysTable.columns.status[language]}
      </Tooltip>
    ),

    /**
     * Cell with status value
     */
    cell: ({row}) => {
      const wayStatus = getWayStatus({
        status: row.original.status,
        lastUpdate: row.original.lastUpdate,
        language,
      });

      return (
        <div className={styles.status}>
          {wayStatus}
        </div>
      );
    },
  }),
  columnHelper.accessor("name", {

    /**
     * Header
     */
    header: () => (
      <Tooltip
        position={PositionTooltip.TOP}
        content={LanguageService.allWays.waysTable.columnTooltip.way[language]}
      >
        {LanguageService.allWays.waysTable.columns.way[language]}
      </Tooltip>
    ),

    /**
     * Cell with clickable way name that leads to way page
     */
    cell: ({row}) => (
      <div>
        <Link path={pages.way.getPath({uuid: row.original.uuid})}>
          {row.original.name}
        </Link>
        <Tooltip content={renderMarkdown(row.original.goalDescription)}>
          <div className={styles.shortCell}>
            {renderMarkdown(row.original.goalDescription)}
          </div>
        </Tooltip>
      </div>
    ),
  }),
  columnHelper.accessor("owner", {

    /**
     * Header
     */
    header: () => (<>
      <Tooltip
        position={PositionTooltip.TOP}
        content={LanguageService.allWays.waysTable.columnTooltip.owner[language]}
      >
        {LanguageService.allWays.waysTable.columns.owner[language]}
      </Tooltip>
    </>
    ),

    /**
     * Cell with way's owner
     */
    cell: ({row}) => {
      return (
        <VerticalContainer>
          <Link path={pages.user.getPath({uuid: row.original.owner.uuid})}>
            {row.original.owner.name}
          </Link>
          {row.original.owner.email}
        </VerticalContainer>
      );
    },
  }),
  columnHelper.accessor("mentors", {

    /**
     * Header
     */
    header: () => (
      <Tooltip
        position={PositionTooltip.TOP}
        content={LanguageService.allWays.waysTable.columnTooltip.mentor[language]}
      >
        {LanguageService.allWays.waysTable.columns.mentor[language]}
      </Tooltip>
    ),

    /**
     * Cell with current mentors
     */
    cell: ({row}) => {
      return (
        <VerticalContainer>
          {row.original.mentors.map((mentor) => (
            <Tooltip
              key={mentor.uuid}
              content={mentor.name}
              position={PositionTooltip.LEFT}
            >
              <Link path={pages.user.getPath({uuid: mentor.uuid})}>
                {mentor.name}
              </Link>
            </Tooltip>
          ))}
        </VerticalContainer>
      );
    },
  }),
  columnHelper.accessor("dayReportUuids", {

    /**
     * Header
     */
    header: () => (
      <>
        <Tooltip
          position={PositionTooltip.TOP_LEFT}
          content={LanguageService.allWays.waysTable.columnTooltip.reports[language]}
        >
          {LanguageService.allWays.waysTable.columns.reports[language]}
        </Tooltip>
      </>),

    /**
     * Cell with amount of favorite for user uuids
     */
    cell: ({row}) => (
      <div className={styles.number}>
        {row.original.dayReportUuids.length.toString()}
      </div>
    ),
  }),
  columnHelper.accessor("favoriteForUserUuids", {

    /**
     * Header
     */
    header: () => (
      <>
        <Tooltip
          position={PositionTooltip.TOP_LEFT}
          content={LanguageService.allWays.waysTable.columnTooltip.favorites[language]}
        >
          {Symbols.STAR}
        </Tooltip>
      </>),

    /**
     * Cell with amount of favorite for user uuids
     */
    cell: ({row}) => (
      <div className={styles.number}>
        {row.original.favoriteForUserUuids.length.toString()}
      </div>
    ),
  }),
];
