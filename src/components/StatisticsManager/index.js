import { PieChart, Pie, Cell, Sector } from "recharts";
import { useCallback, useState } from "react";

import PropTypes from "prop-types";
import { TASK_STATUSES } from "../../const";

const COLORS = ["#5fd246", "#4fe2dd", "#4295db"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, outerRadius, startAngle, endAngle, fill, name } =
    props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + Math.sign(cos) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + Math.sign(cos) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="white"
      >{`${name}`}</text>
    </g>
  );
};

export default function StatisticsManager({ statusesData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const height = 400;
  const width = 600;
  return (
    <PieChart width={width} height={height}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={statusesData}
        cx={width / 2}
        cy={height / 2}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {statusesData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

StatisticsManager.propTypes = {
  statusesData: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf(TASK_STATUSES),
    })
  ),
};
