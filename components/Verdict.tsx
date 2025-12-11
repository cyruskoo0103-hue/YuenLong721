import React from 'react';
import { verdicts } from '../data/timeline';

export const Verdict: React.FC = () => {
  return (
    <section id="verdict" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-black mb-4">法庭判決</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            截至目前為止，針對襲擊事件的法庭審訊結果紀錄。
          </p>
        </div>

        <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">被控人</th>
                <th className="p-4 font-medium">控罪</th>
                <th className="p-4 font-medium">判刑 / 狀態</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {verdicts.map((row, index) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="p-4 font-bold text-slate-900 whitespace-nowrap">
                    {row.defendant}
                  </td>
                  <td className="p-4 text-slate-700 min-w-[200px]">
                    {row.charge}
                  </td>
                  <td className="p-4">
                    <span 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        row.status === 'guilty' 
                          ? 'bg-zinc-100 text-zinc-800 border border-zinc-200' 
                          : row.status === 'not-guilty'
                          ? 'bg-gray-100 text-gray-600 border border-gray-200 dashed'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {row.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 text-xs text-gray-500 rounded border border-gray-100">
          <p>註：上述列表僅列出部分主要案件結果，資料更新至最新公開記錄。</p>
        </div>
      </div>
    </section>
  );
};